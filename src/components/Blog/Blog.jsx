import PropTypes from 'prop-types'; // ES6
import { MdOutlineBookmark } from "react-icons/md";


const Blog = ({ blog, handleAddToBookmark,handleMarkAsRead }) => {
    const { title, cover, reading_time, author, author_img, posted,  hashtags } = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full rounded-2xl my-6' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}: min read </span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><MdOutlineBookmark />

                    </button>
                </div>
            </div>
            <h2 className='text-4xl my-3 font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} ><a href="#"> {hash}</a></span>)
                }
            </p>
            <button 
            onClick={() => handleMarkAsRead(reading_time)} 
            className='text-purple-800 font bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:  PropTypes.func.isRequired
}

export default Blog;