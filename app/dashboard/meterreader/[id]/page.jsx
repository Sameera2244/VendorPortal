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
          <label>Business Partner </label>
          <input type="text" name="BusinessPartner" placeholder={meterreader.BusinessPartner} />
          <label>Contract </label>
          <input type="text" name="Contract" placeholder={meterreader.Contract} />
          <label>Installation</label>
          <input type="text" name="Installation " placeholder={meterreader.Installation} /> 
          <label>Device</label>
          <input type="text" name="Device" placeholder={meterreader.Device} />
          <label>MDE Number</label>
          <input type="number" name="MDENumber" placeholder={meterreader.MDENumber} />
         
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglemeterreaderPage;