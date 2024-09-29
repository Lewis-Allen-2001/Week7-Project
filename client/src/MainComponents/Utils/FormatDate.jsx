export default function FormatDate({ date }) {
    if (!date) return null; 

    let releasedDate = new Date(date);

    let day = releasedDate.getDate().toString().padStart(2, '0'); 
    let month = (releasedDate.getMonth() + 1).toString().padStart(2, '0'); 
    let year = releasedDate.getFullYear();

    let formattedDate = `${day}/${month}/${year}`;
    
    console.log(formattedDate); 

    return (
    <span>{formattedDate}</span>
    );
}


