import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/meterreader/meterreader.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchMeterreaders } from "@/app/lib/data";
import { deletemeterreader } from "@/app/lib/actions";

const MeterreadersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, meterreaders } = await fetchMeterreaders(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a meterreaders..." />
        <Link href="/dashboard/meterreader/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Meter Reading Unit</td>
            <td>Business Partner</td>
            <td>Contract</td>
            <td>Installation</td>
            <td>Device</td>
            <td>MDE Number</td>
          </tr>
        </thead>
        <tbody>
          {meterreaders.map((meterreader) => (
            <tr key={meterreader.id}>
              <td>
                <div className={styles.meterreader}>
                  <Image
                    src={meterreader.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.vendorImage}
                  />
                  {meterreader.MeterReadingUnit}
                </div>
              </td>
              <td>{meterreader.BusinessPartner}</td>
              <td>{meterreader.Contract}</td>
              <td>{meterreader.Installation}</td>
              <td>{meterreader.Device}</td>
              <td>{meterreader.MDENumber}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/meterreader/${meterreader.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deletemeterreader}>
                    <input type="hidden" name="id" value={meterreader.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default MeterreadersPage;
