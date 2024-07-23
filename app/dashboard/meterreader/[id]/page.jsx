import { updatemeterreader } from "@/app/lib/actions";
import { fetchMeterreaders } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/meterreader/singlemeterreader/singlemeterreader.module.css";
import Image from "next/image";

const SinglemeterreaderPage = async ({ params }) => {
  const { id } = params;
  const meterreader = await fetchMeterreaders(id);

  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill />
      </div>
      {meterreader.PurchaseOrderNumber}
    </div>
    <div className={styles.formContainer}>
      <form action={updatetaskmanager} className={styles.form}>
        <input type="hidden" name="id" value={meterreader.id} />
        <label>Purchase Order Number</label>
        <input type="number" name="PurchaseOrderNumber" placeholder={meterreader.VendorsName} />
        <label>Meter Reading Unit</label>
        <input type="text" name="MeterReadingUnit" placeholder={meterreader.MeterReadingUnit} />
        <label>Task Number</label>
        <input type="number" name="TaskNumber" placeholder={meterreader.TaskNumber} />
        <label>Number Of Meters</label>
        <input type="number" name="NumberOfMeters" placeholder={meterreader.NumberOfMeters} />
        <label>Meters with Reads</label>
        <input type="number" name="MeterswithReads" placeholder={meterreader.MeterswithReads} />
        <label>Meters withOut Reads</label>
        <input type="number" name="MeterswithoutReads" placeholder={meterreader.MeterswithoutReads} />
        <label>Status</label>
        <input type="text" name="Status" placeholder={meterreader.Status} />
        <label>MRU User Assigned</label>
        <input type="text" name="MRU User Assigned" placeholder={meterreader.MRUUserAssigned} />
        <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglemeterreaderPage;