class Application extends React.Component {
     render() {
          return (
               <div>
                    <h1>Hello, world!</h1>
                    <LikeButton />
               </div>
          );
     }
}

let domContainer = document.querySelector('#main');
ReactDOM.render(<Application />, domContainer);