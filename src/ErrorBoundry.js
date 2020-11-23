import React from "react"

class ErrorBoundry extends React.Component{

constructor(props) {
    super(props);

    this.state={
        hasError:false,
        error1:"",
        errorInfo1:""
    }

}
    static getDerivedStateFromError(error){
        return{
            hasError:true

        }
    }

    componentDidCatch(error, errorInfo) {
    console.log(error)
    console.log(errorInfo)

    }

    render() {

    if(this.state.hasError){
      return <h1>Something went Wrong!</h1>
    }

    return this.props.children

    }
}

export default ErrorBoundry