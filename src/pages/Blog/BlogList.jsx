// import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const BlogList = () => {
    useTitle("BlogList");

    const { data: allBlog = [], refetch } = useQuery({
        queryKey: ['allBlog'],
        queryFn: async () => {
            const respone = await fetch('https://tech-simple-blog-backend.vercel.app/show_blogs');
            const data = respone.json();
            return data;
        }
    })

    console.log("All Blog : ", allBlog);

    const handleMakeApprove = (_id) => {
        fetch(`https://tech-simple-blog-backend.vercel.app/makeApproveBlog/${_id}`, {
            method: "PUT",
            headers: {},
        })
            .then((respnse) => respnse.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("The blog approved successfully");
                    refetch();
                }
            });
    };


    return (
        <div>
            <h2 className="text-center  fw-bold  my-4">All Blogs</h2>

            <div className="overflow-x-auto">
                <table className="table table-hover  table-bordered text-center">
                    <thead>
                        <tr className=" text-center table-secondary">
                            <th>SL</th>
                            <th>Blog Title</th>
                            <th>Blog Description</th>
                            <th>Publish Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allBlog && <>
                            {allBlog.map((blog, index) => (
                                <tr key={blog._id}>
                                    <td>{index + 1}</td>
                                    <td><Link className=" text-decoration-none" to={`/blogDetails/${blog?._id}`}>{blog?.blogTitle}</Link></td>
                                    <td>{blog.blogDescription ? blog.blogDescription.slice(0, 150) : ""}</td>
                                    {/* {organization.slice(0, 25)} */}
                                    <td>{new Date(blog.publishDate).toLocaleDateString()}</td>
                                    <td>
                                        {blog?.status === "approve" ? (
                                            <p className=" fw-bolder text-success">Approved</p>
                                        ) : (
                                            <button
                                                className=" btn btn-sm btn-info"
                                                onClick={() => handleMakeApprove(blog._id)}
                                            >
                                                Pending
                                            </button>
                                        )}
                                    </td>

                                </tr>
                            ))}

                        </>}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default BlogList;
