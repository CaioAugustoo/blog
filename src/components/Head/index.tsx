import { useEffect } from 'react'

export type HeadProps = {
  title: string
  description?: string
}

const Head = ({ title, description }: HeadProps) => {
  useEffect(() => {
    document.title = title + ' | Caio Augusto'
    document
      ?.querySelector("meta[name='description']")
      ?.setAttribute(
        'content',
        description ||
          'Blog pessoal onde são apresentados diversos posts dando dicas de conteúdos relacionados a programação'
      )
  }, [title, description])

  return <></>
}

export default Head
