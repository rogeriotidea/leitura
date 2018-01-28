import React from 'react';
import { List, ListItem, Divider } from 'material-ui';


const style = {
  marginLeft: 15,
};


const ListarPosts = ({posts, history}) => {
	 return (    
	 	<div>
	 		 <List>
            {posts.map(post => (
                <div onClick={() => history.push(`/${post.category}/${post.id}`)} key={post.id}>
                    <ListItem                     
                        primaryText={post.title}
                        secondaryText={
                            <p>
                                <span style={{ color: '#CCC' }}>
                                      {post.author}, 
                                      Total comentarios: {post.commentCount},
                                      Vote Score {post.voteScore}
                                </span>                                
                                <br />
                                {post.body.substring(0, 100)}
                            </p> 
                        }   
                        secondaryTextLines={2}                   
                    />
                    <Divider inset={true} style={style} />
                </div>
            ))}
       	</List>	 
	   </div>      
 	 )
}

export default ListarPosts;