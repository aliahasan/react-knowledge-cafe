import PropTypes from 'prop-types';

const SingleBlog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

SingleBlog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default SingleBlog;