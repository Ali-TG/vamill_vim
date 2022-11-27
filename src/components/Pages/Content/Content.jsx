const Content = (props) => {
  return(
    <section className='flex flex-col items-center relative justify-center m-4 p-16 bg-white'>
      {props.children}
    </section>
  )
}

export default Content;