import BLOG from '@/blog.config'
import { useEffect, useState } from 'react' // 添加useState
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { ReactCusdis } from 'react-cusdis'
import { useRouter } from 'next/router'
import Giscus from '@giscus/react'

const GitalkComponent = dynamic(
  () => {
    return import('@/components/Gitalk')
  },
  { ssr: false }
)
const UtterancesComponent = dynamic(
  () => {
    return import('@/components/Utterances')
  },
  { ssr: false }
)

const Comments = ({ frontMatter }) => {
  const router = useRouter()
  const { theme } = useTheme()
  const [giscusTheme, setGiscusTheme] = useState('light')
  const cusdisTheme = theme === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    if (typeof window !== 'undefined' && window.CUSDIS) {
      window.CUSDIS.setTheme(cusdisTheme)
    }
    setGiscusTheme(theme === 'dark' ? 'transparent_dark' : 'light') // 根据你的主题设置，可能需要调整这里的值
  }, [cusdisTheme, theme])

  return (
    <div>
      {BLOG.comment && BLOG.comment.provider === 'gitalk' && (
        <GitalkComponent
          options={{
            id: frontMatter.id,
            title: frontMatter.title,
            clientID: BLOG.comment.gitalkConfig.clientID,
            clientSecret: BLOG.comment.gitalkConfig.clientSecret,
            repo: BLOG.comment.gitalkConfig.repo,
            owner: BLOG.comment.gitalkConfig.owner,
            admin: BLOG.comment.gitalkConfig.admin,
            distractionFreeMode: BLOG.comment.gitalkConfig.distractionFreeMode,
            proxy: BLOG.comment.gitalkConfig.proxy
          }}
        />
      )}
      {BLOG.comment && BLOG.comment.provider === 'utterances' && (
        <UtterancesComponent issueTerm={frontMatter.id} />
      )}
      {BLOG.comment && BLOG.comment.provider === 'cusdis' && (
        <ReactCusdis
          lang='zh-cn'
          attrs={{
            host: BLOG.comment.cusdisConfig.host,
            appId: BLOG.comment.cusdisConfig.appId,
            pageId: frontMatter.id,
            pageTitle: frontMatter.title,
            pageUrl: BLOG.link + router.asPath,
            theme: 'auto'
          }}
        />
      )}
      {BLOG.comment && BLOG.comment.provider === 'giscus' && (
        <Giscus
          repo='potato1949/blog'
          repoId='R_kgDOMbySHA'
          category='Announcements'
          categoryId='DIC_kwDOMbySHM4ChPSA'
          mapping='pathname'
          theme={giscusTheme}
        />
      )}
    </div>
  )
}

export default Comments
