export default function Search() {
  return (
    <div className='w-72 p-2 relative -top-8'>
      <form>
        <input type='text' placeholder='Search' className='w-72 p-2 rounded' />
      </form>
      <div>{/* Search Suggestion */}</div>
    </div>
  );
}
