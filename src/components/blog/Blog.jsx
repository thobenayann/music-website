import SectionHeader from '../SectionHeader';
import PostList from './PostList';

// const getPosts = async () => {
//   const res = await fetch('http://localhost:4000/posts');
//   return res.json();
// };

import posts from '../../../_data/posts';

const Blog = async () => {
    // const posts = await getPosts();
    return (
        <section className='section' id='blog'>
            <div className='container mx-auto'>
                <SectionHeader pretitle='Our Blog' title='Latest News' />
                {/* post list */}
                <PostList posts={posts} />
            </div>
        </section>
    );
};

export default Blog;
