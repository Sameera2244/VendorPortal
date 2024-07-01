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
        {meterreader.meterreaders}
      </div>
      <div className={styles.formContainer}>
        <form action={updatemeterreader} className={styles.form}>
          <input type="hidden" name="id" value={meterreader.id} />
          <label>Meter Reading Unit </label>
          <input type="text" name="MeterReadingUnit" placeholder={meterreader.MeterReadingUnit} />
          <label>First Name </label>
          <input type="text" name="FirstName" placeholder={meterreader.FirstName} />
          <label>Last Name </label>
          <input type="text" name="LastName" placeholder={meterreader.LastName} />
          <label>MR Efficency </label>
          <input type="text" name="Installation " placeholder={meterreader.MREfficency} /> 
         
         
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglemeterreaderPage;