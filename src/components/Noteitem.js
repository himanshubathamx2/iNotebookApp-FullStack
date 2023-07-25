import React from 'react'

export const Noteitem = (props) => {
  const { note } = props
  return (

    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias iure eligendi. Repudiandae reiciendis molestiae ab doloribus, magnam ullam officia iste voluptatum, aliquam doloremque ipsa a. Hic voluptatum sapiente quisquam, rerum aperiam quae harum!</p>
        </div>
      </div>
    </div>
  )
}
