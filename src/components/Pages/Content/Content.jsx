const Content = (props) => {
  return(
    <div className='flex flex-col items-center relative justify-center m-4 p-16 bg-blue-600'>
      {props.children}
    </div>
  )
}

export default Content;