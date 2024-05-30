import { updatemeterreaderedit } from "@/app/lib/actions";
import { fetchMeterreaderedits } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/meterreaderedit/singlemeterreaderedit/singlemeterreaderedit.module.css";
import Image from "next/image";

const SinglemeterreadereditPage = async ({ params }) => {
  const { id } = params;
  const meterreaderedit = await fetchMeterreaderedits(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {meterreaderedit.meterreaderedits}
      </div>
      <div className={styles.formContainer}>
        <form action={updatemeterreaderedit} className={styles.form}>
          <input type="hidden" name="id" value={meterreaderedit.id} />
          <label>Name</label>
          <input type="text" name="Meterreaderedits" placeholder={meterreaderedit.name} />
          
          <label>Meter Reading Unit</label>
          <input type="number" name="MeterReadingUnit" placeholder={meterreaderedit.MeterReadingUnit} />
            
          <label>Date</label>
          <input type="number" name="Date" placeholder={meterreaderedit.date} />
          

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglemeterreadereditPage;