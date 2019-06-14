
import React, {Component} from 'react';
import PostData from './post.json';


class Postlist extends Component{

constructor(props){
    super(props);
    this.state={
        data: PostData,
        expanded : false,
        id:null,
      }
}

render() {
               const ex= this.state.expanded;
               const id = this.state.id;
               return (
                <div>
                  {!ex &&
                    <ul>
                      <h1 className="header">Click to view detail</h1>
                        {PostData.map((Postdetails,index)=>{
                          return <li key={index}>
                                      <div className="body" onClick={() => this.setState({ expanded: true, id : index })}>
                                        <h2>{Postdetails.title}</h2>
                                        <p>{Postdetails.content}</p>
                                      </div><span onClick={() => this.setState({data : PostData.splice(index,1)})}>X</span>
                                 </li>
                          })}
                     </ul>
                  }
                  {ex &&  <div className="detailsheader">
                        <button onClick={() => this.setState({expanded : false, id:null})}>back</button>
                        <h2>{PostData[id].title}</h2>
                        <p>{PostData[id].content}<br/><br/>
                            {PostData[id].date}<br/><br/>
                            {PostData[id].slug}
                        </p>
                    </div>
                  }
                </div>
              )
        }
}

export default Postlist;
