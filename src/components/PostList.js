import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component{
    //The reason why this is a class component is because we want to use lifecycle methods inside. 
    //We use lifecycle methods to make calls to API

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts};
}

export default connect(mapStateToProps,{fetchPosts})(PostList);
//first parameter is the state that we can get from the mapStateToProps. 
//Second parameter is the action creator itself (using destructuring)
//first parameter in the second braces will be the postList component itself.
//(Which component do we want to pass the data to? In this case it is the PostList component.)




