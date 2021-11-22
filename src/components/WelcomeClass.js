import React from 'react'
import MyTr from './MyTr'
class Welcome extends React.Component{
    constructor(props)
    {
        super();
        this.state = {
            name:'Fadi',
            searchVal:'',
            filteredPoints:[{
                val:5,
                reason:'reason 5'
            },
            {
                val:4,
                reason:'reason 4'
            },
            {
                val:1,
                reason:'reason 1'
            }],
            points:[
                {
                    val:5,
                    reason:'reason 5'
                },
                {
                    val:4,
                    reason:'reason 4'
                },
                {
                    val:1,
                    reason:'reason 1'
                }
            ]
        }
        this.changeName = this.changeName.bind(this)
        this.addPoint = this.addPoint.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)

    }
    changeName(e)
    {
        console.log(e)
        this.setState({
            name:'Ali'
        })
    }
    addPoint()
    {
        let tempPoints = this.state.points;
        tempPoints.push({
            val:10,
            reason:'reason 10'
        })
            this.setState({
                points:tempPoints
            })

    }
    onSearchChange(e)
    {
        console.log(e.target.value)
        let newValue = e.target.value;
        let tempPoints = this.state.points;
        // search
        if(!newValue)
        {
            this.setState({
                searchVal:newValue,
                filteredPoints:this.state.points
            })
            return
        }
       let filtered = tempPoints.filter((item)=>{
           return item.val == newValue
        })
        this.setState({
            searchVal:newValue,
            filteredPoints:filtered
        })
    }
    render()
    {
        return <div>
            <p>Hi, {this.state.name}</p>
            <form>
                <input onChange={this.onSearchChange} value={this.state.searchVal} type="text" id="search"/>
            </form>
            <button onClick={this.changeName}>Chane Name</button>
            <button onClick={this.addPoint}>Add Point</button>

            <table>
               <tr>
               <th>Value</th>
                <th>Reason</th>
               </tr>
               {/* rows */}
               {
                   this.state.filteredPoints.map((item)=>{
                       return <MyTr item={item}/>
                   })
               }
            </table>
        </div>
    }
}

export default Welcome