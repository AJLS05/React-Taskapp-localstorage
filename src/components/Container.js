

export const Container = ({children}) => {
    return(
        <div class="container p-4">
            <div className="col-md-4 offset-md-4 ">
                {children}
            </div>
        </div>
    )
}