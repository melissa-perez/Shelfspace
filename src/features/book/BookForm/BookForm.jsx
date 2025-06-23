function BookForm() {
  return (
    <form>
      <label>Reading Status</label>
      <select>
        <option value="tbr">To be read(TBR)</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
    </form>
  );
}

export default BookForm;
