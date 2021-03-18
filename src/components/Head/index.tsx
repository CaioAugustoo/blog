import { useEffect } from 'react'

import { HeadProps } from 'types/api'

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
