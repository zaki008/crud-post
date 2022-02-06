import Spinner from "./Spinner";

const TablePost = (props) => {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        {props.loading ? (
          <tbody>
            <tr>
              <td colSpan={4}>
                <Spinner />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {props.posts !== null &&
              props.currentPosts.map((post, index) => {
                return (
                  <tr key={post.id}>
                    <td>{index + 1}</td>
                    <td>
                      {post.title.length < 25
                        ? post.title
                        : `${post.title.substr(0, 25)}...`}
                    </td>
                    <td>
                      {post.body.length < 100
                        ? post.body
                        : `${post.body.substr(0, 100)}...`}
                    </td>
                    <td>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <button
                          to={'post/edit'}
                          className='btn btn-info'
                          style={{ marginRight: '10px' }}
                          onClick={(e) => props.edit(e, post.id)}
                          value={post.id}
                        >
                          Edit
                        </button>
                        <button
                          className='btn btn-danger'
                          onClick={props.delete}
                          value={post.id}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        )}
      </table>
    );
}

export default TablePost