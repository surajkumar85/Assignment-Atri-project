import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex140Cb, useFlex139Cb, useFlex138Cb, useFlex137Cb, useFlex152Cb, useFlex151Cb, useFlex150Cb, useDiv123Cb, useDiv118Cb, useFlex145Cb, useFlex158Cb, useDiv132Cb, useDiv131Cb, useFlex157Cb, useFlex160Cb, useDiv134Cb, useDiv133Cb, useFlex159Cb, useFlex162Cb, useDiv136Cb, useDiv135Cb, useFlex161Cb, useFlex164Cb, useDiv138Cb, useDiv137Cb, useFlex163Cb, useFlex155Cb, useDiv129Cb, useFlex154Cb, useDiv127Cb, useDiv128Cb, useFlex153Cb, useDiv124Cb, useDiv125Cb, useDiv126Cb, useFlex156Cb, useDiv130Cb, useTextBox220Cb, useTextBox216Cb, useTextBox217Cb, useTextBox218Cb, useTextBox219Cb, useTextBox215Cb, useImage81Cb, useImage86Cb, useTextBox234Cb, useTextBox235Cb, useTextBox225Cb, useImage87Cb, useTextBox252Cb, useTextBox253Cb, useTextBox251Cb, useImage88Cb, useTextBox255Cb, useTextBox256Cb, useTextBox254Cb, useImage89Cb, useTextBox258Cb, useTextBox259Cb, useTextBox257Cb, useImage90Cb, useTextBox261Cb, useTextBox262Cb, useTextBox260Cb, useTextBox248Cb, useTextBox249Cb, useTextBox245Cb, useTextBox246Cb, useTextBox247Cb, useTextBox236Cb, useTextBox237Cb, useTextBox238Cb, useTextBox239Cb, useTextBox240Cb, useTextBox241Cb, useTextBox242Cb, useTextBox243Cb, useTextBox244Cb, useTextBox250Cb } from "../page-cbs/Projects";
import "../page-css/Projects.css";
import "../custom/Projects";

export default function Projects() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex140Props = useStore((state)=>state["Projects"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Projects"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex139Props = useStore((state)=>state["Projects"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Projects"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Flex138Props = useStore((state)=>state["Projects"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Projects"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex137Props = useStore((state)=>state["Projects"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Projects"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex152Props = useStore((state)=>state["Projects"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["Projects"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Flex151Props = useStore((state)=>state["Projects"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["Projects"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Flex150Props = useStore((state)=>state["Projects"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["Projects"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Div123Props = useStore((state)=>state["Projects"]["Div123"]);
const Div123IoProps = useIoStore((state)=>state["Projects"]["Div123"]);
const Div123Cb = useDiv123Cb()
const Div118Props = useStore((state)=>state["Projects"]["Div118"]);
const Div118IoProps = useIoStore((state)=>state["Projects"]["Div118"]);
const Div118Cb = useDiv118Cb()
const Flex145Props = useStore((state)=>state["Projects"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["Projects"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Flex158Props = useStore((state)=>state["Projects"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["Projects"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Div132Props = useStore((state)=>state["Projects"]["Div132"]);
const Div132IoProps = useIoStore((state)=>state["Projects"]["Div132"]);
const Div132Cb = useDiv132Cb()
const Div131Props = useStore((state)=>state["Projects"]["Div131"]);
const Div131IoProps = useIoStore((state)=>state["Projects"]["Div131"]);
const Div131Cb = useDiv131Cb()
const Flex157Props = useStore((state)=>state["Projects"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["Projects"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex160Props = useStore((state)=>state["Projects"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["Projects"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Div134Props = useStore((state)=>state["Projects"]["Div134"]);
const Div134IoProps = useIoStore((state)=>state["Projects"]["Div134"]);
const Div134Cb = useDiv134Cb()
const Div133Props = useStore((state)=>state["Projects"]["Div133"]);
const Div133IoProps = useIoStore((state)=>state["Projects"]["Div133"]);
const Div133Cb = useDiv133Cb()
const Flex159Props = useStore((state)=>state["Projects"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["Projects"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const Flex162Props = useStore((state)=>state["Projects"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["Projects"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Div136Props = useStore((state)=>state["Projects"]["Div136"]);
const Div136IoProps = useIoStore((state)=>state["Projects"]["Div136"]);
const Div136Cb = useDiv136Cb()
const Div135Props = useStore((state)=>state["Projects"]["Div135"]);
const Div135IoProps = useIoStore((state)=>state["Projects"]["Div135"]);
const Div135Cb = useDiv135Cb()
const Flex161Props = useStore((state)=>state["Projects"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["Projects"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex164Props = useStore((state)=>state["Projects"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["Projects"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const Div138Props = useStore((state)=>state["Projects"]["Div138"]);
const Div138IoProps = useIoStore((state)=>state["Projects"]["Div138"]);
const Div138Cb = useDiv138Cb()
const Div137Props = useStore((state)=>state["Projects"]["Div137"]);
const Div137IoProps = useIoStore((state)=>state["Projects"]["Div137"]);
const Div137Cb = useDiv137Cb()
const Flex163Props = useStore((state)=>state["Projects"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["Projects"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex155Props = useStore((state)=>state["Projects"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["Projects"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Div129Props = useStore((state)=>state["Projects"]["Div129"]);
const Div129IoProps = useIoStore((state)=>state["Projects"]["Div129"]);
const Div129Cb = useDiv129Cb()
const Flex154Props = useStore((state)=>state["Projects"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["Projects"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Div127Props = useStore((state)=>state["Projects"]["Div127"]);
const Div127IoProps = useIoStore((state)=>state["Projects"]["Div127"]);
const Div127Cb = useDiv127Cb()
const Div128Props = useStore((state)=>state["Projects"]["Div128"]);
const Div128IoProps = useIoStore((state)=>state["Projects"]["Div128"]);
const Div128Cb = useDiv128Cb()
const Flex153Props = useStore((state)=>state["Projects"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["Projects"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Div124Props = useStore((state)=>state["Projects"]["Div124"]);
const Div124IoProps = useIoStore((state)=>state["Projects"]["Div124"]);
const Div124Cb = useDiv124Cb()
const Div125Props = useStore((state)=>state["Projects"]["Div125"]);
const Div125IoProps = useIoStore((state)=>state["Projects"]["Div125"]);
const Div125Cb = useDiv125Cb()
const Div126Props = useStore((state)=>state["Projects"]["Div126"]);
const Div126IoProps = useIoStore((state)=>state["Projects"]["Div126"]);
const Div126Cb = useDiv126Cb()
const Flex156Props = useStore((state)=>state["Projects"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["Projects"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Div130Props = useStore((state)=>state["Projects"]["Div130"]);
const Div130IoProps = useIoStore((state)=>state["Projects"]["Div130"]);
const Div130Cb = useDiv130Cb()
const TextBox220Props = useStore((state)=>state["Projects"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Projects"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox216Props = useStore((state)=>state["Projects"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["Projects"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const TextBox217Props = useStore((state)=>state["Projects"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["Projects"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox218Props = useStore((state)=>state["Projects"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Projects"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const TextBox219Props = useStore((state)=>state["Projects"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Projects"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox215Props = useStore((state)=>state["Projects"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Projects"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const Image81Props = useStore((state)=>state["Projects"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["Projects"]["Image81"]);
const Image81Cb = useImage81Cb()
const Image86Props = useStore((state)=>state["Projects"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["Projects"]["Image86"]);
const Image86Cb = useImage86Cb()
const TextBox234Props = useStore((state)=>state["Projects"]["TextBox234"]);
const TextBox234IoProps = useIoStore((state)=>state["Projects"]["TextBox234"]);
const TextBox234Cb = useTextBox234Cb()
const TextBox235Props = useStore((state)=>state["Projects"]["TextBox235"]);
const TextBox235IoProps = useIoStore((state)=>state["Projects"]["TextBox235"]);
const TextBox235Cb = useTextBox235Cb()
const TextBox225Props = useStore((state)=>state["Projects"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Projects"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const Image87Props = useStore((state)=>state["Projects"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["Projects"]["Image87"]);
const Image87Cb = useImage87Cb()
const TextBox252Props = useStore((state)=>state["Projects"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["Projects"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const TextBox253Props = useStore((state)=>state["Projects"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["Projects"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const TextBox251Props = useStore((state)=>state["Projects"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["Projects"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const Image88Props = useStore((state)=>state["Projects"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["Projects"]["Image88"]);
const Image88Cb = useImage88Cb()
const TextBox255Props = useStore((state)=>state["Projects"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["Projects"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const TextBox256Props = useStore((state)=>state["Projects"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["Projects"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const TextBox254Props = useStore((state)=>state["Projects"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["Projects"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const Image89Props = useStore((state)=>state["Projects"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["Projects"]["Image89"]);
const Image89Cb = useImage89Cb()
const TextBox258Props = useStore((state)=>state["Projects"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["Projects"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const TextBox259Props = useStore((state)=>state["Projects"]["TextBox259"]);
const TextBox259IoProps = useIoStore((state)=>state["Projects"]["TextBox259"]);
const TextBox259Cb = useTextBox259Cb()
const TextBox257Props = useStore((state)=>state["Projects"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["Projects"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const Image90Props = useStore((state)=>state["Projects"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["Projects"]["Image90"]);
const Image90Cb = useImage90Cb()
const TextBox261Props = useStore((state)=>state["Projects"]["TextBox261"]);
const TextBox261IoProps = useIoStore((state)=>state["Projects"]["TextBox261"]);
const TextBox261Cb = useTextBox261Cb()
const TextBox262Props = useStore((state)=>state["Projects"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["Projects"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const TextBox260Props = useStore((state)=>state["Projects"]["TextBox260"]);
const TextBox260IoProps = useIoStore((state)=>state["Projects"]["TextBox260"]);
const TextBox260Cb = useTextBox260Cb()
const TextBox248Props = useStore((state)=>state["Projects"]["TextBox248"]);
const TextBox248IoProps = useIoStore((state)=>state["Projects"]["TextBox248"]);
const TextBox248Cb = useTextBox248Cb()
const TextBox249Props = useStore((state)=>state["Projects"]["TextBox249"]);
const TextBox249IoProps = useIoStore((state)=>state["Projects"]["TextBox249"]);
const TextBox249Cb = useTextBox249Cb()
const TextBox245Props = useStore((state)=>state["Projects"]["TextBox245"]);
const TextBox245IoProps = useIoStore((state)=>state["Projects"]["TextBox245"]);
const TextBox245Cb = useTextBox245Cb()
const TextBox246Props = useStore((state)=>state["Projects"]["TextBox246"]);
const TextBox246IoProps = useIoStore((state)=>state["Projects"]["TextBox246"]);
const TextBox246Cb = useTextBox246Cb()
const TextBox247Props = useStore((state)=>state["Projects"]["TextBox247"]);
const TextBox247IoProps = useIoStore((state)=>state["Projects"]["TextBox247"]);
const TextBox247Cb = useTextBox247Cb()
const TextBox236Props = useStore((state)=>state["Projects"]["TextBox236"]);
const TextBox236IoProps = useIoStore((state)=>state["Projects"]["TextBox236"]);
const TextBox236Cb = useTextBox236Cb()
const TextBox237Props = useStore((state)=>state["Projects"]["TextBox237"]);
const TextBox237IoProps = useIoStore((state)=>state["Projects"]["TextBox237"]);
const TextBox237Cb = useTextBox237Cb()
const TextBox238Props = useStore((state)=>state["Projects"]["TextBox238"]);
const TextBox238IoProps = useIoStore((state)=>state["Projects"]["TextBox238"]);
const TextBox238Cb = useTextBox238Cb()
const TextBox239Props = useStore((state)=>state["Projects"]["TextBox239"]);
const TextBox239IoProps = useIoStore((state)=>state["Projects"]["TextBox239"]);
const TextBox239Cb = useTextBox239Cb()
const TextBox240Props = useStore((state)=>state["Projects"]["TextBox240"]);
const TextBox240IoProps = useIoStore((state)=>state["Projects"]["TextBox240"]);
const TextBox240Cb = useTextBox240Cb()
const TextBox241Props = useStore((state)=>state["Projects"]["TextBox241"]);
const TextBox241IoProps = useIoStore((state)=>state["Projects"]["TextBox241"]);
const TextBox241Cb = useTextBox241Cb()
const TextBox242Props = useStore((state)=>state["Projects"]["TextBox242"]);
const TextBox242IoProps = useIoStore((state)=>state["Projects"]["TextBox242"]);
const TextBox242Cb = useTextBox242Cb()
const TextBox243Props = useStore((state)=>state["Projects"]["TextBox243"]);
const TextBox243IoProps = useIoStore((state)=>state["Projects"]["TextBox243"]);
const TextBox243Cb = useTextBox243Cb()
const TextBox244Props = useStore((state)=>state["Projects"]["TextBox244"]);
const TextBox244IoProps = useIoStore((state)=>state["Projects"]["TextBox244"]);
const TextBox244Cb = useTextBox244Cb()
const TextBox250Props = useStore((state)=>state["Projects"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["Projects"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()

  return (<>
  <Flex2 className="p-Projects Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Flex2 className="p-Projects Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<TextBox2 className="p-Projects TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<Flex2 className="p-Projects Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<TextBox2 className="p-Projects TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
<TextBox2 className="p-Projects TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<TextBox2 className="p-Projects TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox2 className="p-Projects TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<Flex2 className="p-Projects Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<TextBox2 className="p-Projects TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<Image2 className="p-Projects Image81 bpt" {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Projects Flex152 bpt" {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<Flex2 className="p-Projects Flex151 bpt" {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<Flex2 className="p-Projects Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Image2 className="p-Projects Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
<Div2 className="p-Projects Div123 bpt" {...Div123Props} {...Div123Cb} {...Div123IoProps}>
<Div2 className="p-Projects Div118 bpt" {...Div118Props} {...Div118Cb} {...Div118IoProps}>
<TextBox2 className="p-Projects TextBox234 bpt" {...TextBox234Props} {...TextBox234Cb} {...TextBox234IoProps}/>
<TextBox2 className="p-Projects TextBox235 bpt" {...TextBox235Props} {...TextBox235Cb} {...TextBox235IoProps}/>
<Flex2 className="p-Projects Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<TextBox2 className="p-Projects TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
</Flex2>
</Div2>
</Div2>
</Flex2>
<Flex2 className="p-Projects Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<Image2 className="p-Projects Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
<Div2 className="p-Projects Div132 bpt" {...Div132Props} {...Div132Cb} {...Div132IoProps}>
<Div2 className="p-Projects Div131 bpt" {...Div131Props} {...Div131Cb} {...Div131IoProps}>
<TextBox2 className="p-Projects TextBox253 bpt" {...TextBox253Props} {...TextBox253Cb} {...TextBox253IoProps}/>
<TextBox2 className="p-Projects TextBox252 bpt" {...TextBox252Props} {...TextBox252Cb} {...TextBox252IoProps}/>
<Flex2 className="p-Projects Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<TextBox2 className="p-Projects TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
</Flex2>
</Div2>
</Div2>
</Flex2>
<Flex2 className="p-Projects Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<Image2 className="p-Projects Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
<Div2 className="p-Projects Div134 bpt" {...Div134Props} {...Div134Cb} {...Div134IoProps}>
<Div2 className="p-Projects Div133 bpt" {...Div133Props} {...Div133Cb} {...Div133IoProps}>
<TextBox2 className="p-Projects TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
<TextBox2 className="p-Projects TextBox255 bpt" {...TextBox255Props} {...TextBox255Cb} {...TextBox255IoProps}/>
<Flex2 className="p-Projects Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<TextBox2 className="p-Projects TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
</Flex2>
</Div2>
</Div2>
</Flex2>
<Flex2 className="p-Projects Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<Image2 className="p-Projects Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
<Div2 className="p-Projects Div136 bpt" {...Div136Props} {...Div136Cb} {...Div136IoProps}>
<Div2 className="p-Projects Div135 bpt" {...Div135Props} {...Div135Cb} {...Div135IoProps}>
<TextBox2 className="p-Projects TextBox259 bpt" {...TextBox259Props} {...TextBox259Cb} {...TextBox259IoProps}/>
<TextBox2 className="p-Projects TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
<Flex2 className="p-Projects Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<TextBox2 className="p-Projects TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
</Flex2>
</Div2>
</Div2>
</Flex2>
<Flex2 className="p-Projects Flex164 bpt" {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<Image2 className="p-Projects Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
<Div2 className="p-Projects Div138 bpt" {...Div138Props} {...Div138Cb} {...Div138IoProps}>
<Div2 className="p-Projects Div137 bpt" {...Div137Props} {...Div137Cb} {...Div137IoProps}>
<TextBox2 className="p-Projects TextBox261 bpt" {...TextBox261Props} {...TextBox261Cb} {...TextBox261IoProps}/>
<TextBox2 className="p-Projects TextBox262 bpt" {...TextBox262Props} {...TextBox262Cb} {...TextBox262IoProps}/>
<Flex2 className="p-Projects Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<TextBox2 className="p-Projects TextBox260 bpt" {...TextBox260Props} {...TextBox260Cb} {...TextBox260IoProps}/>
</Flex2>
</Div2>
</Div2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Projects Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Div2 className="p-Projects Div129 bpt" {...Div129Props} {...Div129Cb} {...Div129IoProps}>
<TextBox2 className="p-Projects TextBox248 bpt" {...TextBox248Props} {...TextBox248Cb} {...TextBox248IoProps}/>
<TextBox2 className="p-Projects TextBox249 bpt" {...TextBox249Props} {...TextBox249Cb} {...TextBox249IoProps}/>
<Flex2 className="p-Projects Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Div2 className="p-Projects Div127 bpt" {...Div127Props} {...Div127Cb} {...Div127IoProps}>
<TextBox2 className="p-Projects TextBox245 bpt" {...TextBox245Props} {...TextBox245Cb} {...TextBox245IoProps}/>
<TextBox2 className="p-Projects TextBox246 bpt" {...TextBox246Props} {...TextBox246Cb} {...TextBox246IoProps}/>
<TextBox2 className="p-Projects TextBox247 bpt" {...TextBox247Props} {...TextBox247Cb} {...TextBox247IoProps}/>
</Div2>
<Div2 className="p-Projects Div128 bpt" {...Div128Props} {...Div128Cb} {...Div128IoProps}>
<Flex2 className="p-Projects Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<Div2 className="p-Projects Div124 bpt" {...Div124Props} {...Div124Cb} {...Div124IoProps}>
<TextBox2 className="p-Projects TextBox236 bpt" {...TextBox236Props} {...TextBox236Cb} {...TextBox236IoProps}/>
<TextBox2 className="p-Projects TextBox237 bpt" {...TextBox237Props} {...TextBox237Cb} {...TextBox237IoProps}/>
<TextBox2 className="p-Projects TextBox238 bpt" {...TextBox238Props} {...TextBox238Cb} {...TextBox238IoProps}/>
</Div2>
<Div2 className="p-Projects Div125 bpt" {...Div125Props} {...Div125Cb} {...Div125IoProps}>
<TextBox2 className="p-Projects TextBox241 bpt" {...TextBox241Props} {...TextBox241Cb} {...TextBox241IoProps}/>
<TextBox2 className="p-Projects TextBox240 bpt" {...TextBox240Props} {...TextBox240Cb} {...TextBox240IoProps}/>
<TextBox2 className="p-Projects TextBox239 bpt" {...TextBox239Props} {...TextBox239Cb} {...TextBox239IoProps}/>
</Div2>
<Div2 className="p-Projects Div126 bpt" {...Div126Props} {...Div126Cb} {...Div126IoProps}>
<TextBox2 className="p-Projects TextBox244 bpt" {...TextBox244Props} {...TextBox244Cb} {...TextBox244IoProps}/>
<TextBox2 className="p-Projects TextBox243 bpt" {...TextBox243Props} {...TextBox243Cb} {...TextBox243IoProps}/>
<TextBox2 className="p-Projects TextBox242 bpt" {...TextBox242Props} {...TextBox242Cb} {...TextBox242IoProps}/>
</Div2>
</Flex2>
</Div2>
</Flex2>
</Div2>
</Flex2>
<Flex2 className="p-Projects Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<Div2 className="p-Projects Div130 bpt" {...Div130Props} {...Div130Cb} {...Div130IoProps}>
<TextBox2 className="p-Projects TextBox250 bpt" {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
</Div2>
</Flex2>
  </>);
}
