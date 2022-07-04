import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query MyQuery($topic: String!) {
        getSubredditListByTopic(topic: $topic) {
            topic
            id
            created_at
        }
    }
`

export const GET_ALL_POSTS = gql`
query MyQuery {
    getPostList {
        body
        created_at
        image
        id
        title
        subreddit_id
        username
        comments {
            created_at
            id
            post_id
            text
            username
        }
        subreddit {
            created_at
            id
            topic
        }
        votes {
            created_at
            id
            post_id
            upvote
            username
        }
    }
}
`