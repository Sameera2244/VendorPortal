import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/taskmanager/taskmanager.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchTaskManagers } from "@/app/lib/data";
import { deleteTaskManager } from "@/app/lib/actions";

const TaskManagersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, taskmanagers } = await fetchTaskManagers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a taskmanager..." />
        <Link href="/dashboard/taskmanager/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Purchase Order Number</td>
            <td>Meter Reading Unit</td>           
            <td>Task Number</td>
            <td>Number of Meters</td>
            <td>Meters with Reads</td>
            <td>Meters without Reads</td>
            <td>Status</td>
            <td>MRU User Assigned</td>
          </tr>
        </thead>
        <tbody>
          {taskmanagers.map((taskmanager) => (
            <tr key={taskmanager.id}>
              <td>
                <div className={styles.taskmanager}>
                  <Image
                    src={taskmanager.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.taskmanagerImage}
                  />
                  {taskmanager.PurchaseOrderNumber}
                </div>
              </td>
              <td>{taskmanager.MeterReadingUnit}</td> 
              <td>{taskmanager.TaskNumber}</td>
              <td>{taskmanager.NumberOfMeters}</td>
              <td>{taskmanager.MeterswithReads}</td>
              <td>{taskmanager.MeterswithoutReads}</td>
              <td>{taskmanager.Status}</td>
              <td>{taskmanager.MRUuserAssigned}</td>
              

              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/meterreaderedit/${taskmanager.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteTaskManager}>
                    <input type="hidden" name="id" value={taskmanager.id} />
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

export default TaskManagersPage;