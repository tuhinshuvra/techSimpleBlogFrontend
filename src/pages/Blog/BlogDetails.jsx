import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {

    const blogsData = useLoaderData();

    console.log("blogsData : ", blogsData);
    const { _id, blogTitle, blogDescription, blogConclusion, bloggerName, bloggerEmail, image, publishDate } = blogsData;

    return (
        <div className=' mx-3 my-4'>
            <div className="card my-3" >
                <div className="d-flex justify-content-between p-3">
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5> {blogTitle} </h5>
                            <p className="card-text my-1">{blogDescription}</p>
                            <p className="card-text my-1">{blogConclusion}</p>


                        </div>
                    </div>
                    <div className="col-md-2">
                        <img src={image} className="blogImageHome rounded-start" alt="..." />
                    </div>
                </div>
                <div className=' d-flex justify-content-end'>
                    <p className="card-text mx-1"><small className="text-body-secondary"> <b>Blogger :</b> {bloggerName}</small></p>
                    <p className="card-text mx-1"><small className="text-body-secondary"> <b> Published:</b> {new Date(publishDate).toLocaleDateString()}</small></p>
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;