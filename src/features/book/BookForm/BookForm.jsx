import bookFormStyles from './BookForm.module.css';

function BookForm() {
  return (
    <form>
      <label className={bookFormStyles.label}>Reading Status </label>
      <select>
        <option value="tbr">To be read(TBR)</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
    </form>
  );
}

export default BookForm;
