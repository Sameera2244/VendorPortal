import { addmeterreader } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/meterreader/addmeterreader/addmeterreader.module.css";

const AddmeterreaderPage = () => {
  return (
    <div className={styles.container}>
      <form action={addmeterreader} className={styles.form}>
      <div className={styles.formGroup}>
          <label htmlFor="MeterreadingUnit">Meter Reading Unit:</label>
        <input type="text" placeholder="Meter Reading Unit" name="MeterReadingUnit" required />
       </div>
       <div className={styles.formGroup}>
          <label htmlFor="BusinessPartner">Business Partner:</label>
        <input type="text" placeholder="Business Partner" name="BusinessPartner" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Contract">Contract:</label>
        <input type="text" placeholder="Contract" name="Contract" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Installation">Installation:</label>
        <input type="text" placeholder="Installation" name="Installation" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Device">Device:</label>
        <input type="text" placeholder="Device" name="Device" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="MDENumber">MDE Number:</label>
        <input type="number" placeholder="MDE Number" name="MDENumber" required />
        </div>
        <div className={styles.formGroup}>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddmeterreaderPage;