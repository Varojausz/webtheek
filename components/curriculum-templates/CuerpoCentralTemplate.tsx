import SeccionCuerpoCentral from './SeccionCuerpoCentral'
import { seccionCuerpoCentralInfoType } from './templates.info'

type CuerpoCentralTemplateProps = {
  page: seccionCuerpoCentralInfoType[]
}

export default function CuerpoCentralTemplate({page}: CuerpoCentralTemplateProps) {

  return (
    <div className='flex flex-col justify-center px-[1.25rem]'>
        {page.map((seccion, seccionIndx) => (
            <SeccionCuerpoCentral key={seccionIndx} {...seccion}/>
        ))}
    </div>
  )
}
