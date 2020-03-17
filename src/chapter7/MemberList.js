import React, {Component} from 'react'
import Member from './Member'

class MemberList extends Component {
  constructor() {
    super()
    this.state = {
      members: [],
      loading: false,
      error: null
    }
  }

  componentWillMount() {
    this.setState({ loading: true })
    getFakeMembers(this.props.count).then(
      members => {
        this.setState({members, loading: false})
      }, 
      error => {
        this.setState({error, loading: false})
      }
    )
  }

  componentWillUpdate() {
    console.log("갱신 생애주기")
  }

  render() {
    const { members, loading, error } = this.state
    return(
      <div className="member-list">
        {
          (loading) ?
          <span>멤버 로딩 중</span> :
          (members.length) ?
            members.map((user, i) =>
              <Member key={i} {...user} />
          ) :
          <span>0 멤버 로딩됨...</span>
        }
        {/*         
        {
          (error) ? <div> 멤버 로딩 오류: {error} </div> : "" 
        } 
        */}

      </div>
    )
  }
}

const getFakeMembers = count => new Promise((resolve, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`
  const request = new XMLHttpRequest()
  request.open('GET', api)
  request.onload = () => (request.status === 200) ?
    resolve(JSON.parse(request.response).results) :
    rejects(Error(request.statusText))
  request.onerror = err => rejects(err)
  request.send()
})

export default MemberList