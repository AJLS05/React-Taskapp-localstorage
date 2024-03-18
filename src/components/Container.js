export const Container = ({ children }) => {
  return (
    <div class='container p-4'>
      <div className=' col-lg-6 offset-lg-3 col-sm-8 offset-sm-2'>
        {children}
      </div>
    </div>
  )
}
