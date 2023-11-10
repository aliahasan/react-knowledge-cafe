import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const SingleBlog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
        const {title,cover, reading_time, author, author_img, posted_date, hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex gap-6'>
                    <img className='w-14 h-14 rounded-full ' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-sky-500 text-xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,index) => <span key={index}><a href="">#{hash}</a> </span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};

SingleBlog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default SingleBlog;