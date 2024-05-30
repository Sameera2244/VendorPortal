import { addmeterreader } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/meterreader/addmeterreader/addmeterreader.module.css";

const AddmeterreaderPage = () => {
  return (
    <div className={styles.container}>
      <form action={addmeterreader} className={styles.form}>
      <div className={styles.formGroup}>
          <label htmlFor="Name">Name:</label>
        <input type="text" placeholder="Name" name="Name" required />
       </div>
       <div className={styles.formGroup}>
          <label htmlFor="IdNO">IdNO:</label>
        <input type="number" placeholder="IdNO" name="IdNO" required />
        </div>

        <div className={styles.formGroup}>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddmeterreaderPage;