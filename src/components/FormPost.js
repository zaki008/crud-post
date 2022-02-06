const FormPost = (props) => {
    return (
      <form onSubmit={props.submit}>
        <div className='mb-3'>
          <label className='form-label'>title</label>
          <input
            required
            type={'text'}
            name='title'
            className='form-control'
            placeholder='Input Name'
            value={props.valueTitle}
            onChange={props.change}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>body</label>
          <textarea
            required
            className='form-control'
            name='body'
            rows={10}
            placeholder='Input body'
            value={props.valueBody}
            onChange={props.change}
          ></textarea>
        </div>
        <input
          type={'submit'}
          className='btn btn-primary d-block w-100'
          value={props.valueSubmit}
        />
      </form>
    );
}

export default FormPost