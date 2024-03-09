import React from 'react'

const NewsItem = ({title, desc, author, date, image}) => {
  return (
    <article  className="flex max-w-xl flex-col items-start justify-between shadow-lg p-4">
                <img src={image?image:"Pas d'image"} className="h-70 w-full rounded bg-gray-50" loading='lazy' />
              <div className="flex items-center pt-3 gap-x-4 text-xs">
                <time dateTime={date} className="text-gray-500">
                  {date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{desc?desc.slice(0, 100): "Pas de description fournie !!!"}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {author}
                    </a>
                  </p>
                  
                </div>
              </div>
            </article>
  )
}

export default NewsItem