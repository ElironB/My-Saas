import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function Cta() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <button className=" "data-cal-namespace=""
	  data-cal-link="octic/15min"
    
	  data-cal-config='{"layout":"month_view"}'
	  >Click me</button>;
  };