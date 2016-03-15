package hrhx.dhm.sys.utils;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;

import org.hyperic.sigar.CpuPerc;
import org.hyperic.sigar.Sigar;
import org.hyperic.sigar.SigarException;

/**
 * @see 系统信息工具类
 * @author YangYing
 *
 */
public class SystemMessageUtil {
	static Sigar sigar=new Sigar();
	public static void main(String[] args) throws SigarException, InterruptedException {
		//System.out.println(System.getProperty("java.library.path"));
		try {
			/*CpuPerc[] cpu=sigar.getCpuPercList();
			for (int i = 0; i < cpu.length; i++) {
				System.out.println(cpu[i]);
			}
			*/
			System.out.println("Cpu使用情况sigar.getCpu()"+sigar.getCpu());
			
			System.out.println("Cpu使用情况getCpuPerc()"+sigar.getCpuPerc());
			
			System.out.println("Cpu使用情况getCpuPerc()"+sigar.getCpuInfoList());
			
			System.out.println("内存使用情况1"+sigar.getMem());
			
			System.out.println("-----------------");
			getCpuAll();
			
		} catch (SigarException e) {
			e.printStackTrace();
		}
		System.out.println(sigar.getMem());
		System.out.println("getActualFree()-"+sigar.getMem().getActualFree());
		System.out.println("getActualUsed()-"+sigar.getMem().getActualUsed());
		System.out.println(".getFree()-"+sigar.getMem().getFree());
		System.out.println(".getRam()-"+sigar.getMem().getRam());
		System.out.println(".getTotal()-"+sigar.getMem().getTotal());
		System.out.println(".getUsed()-"+sigar.getMem().getUsed());
		System.out.println(".getCpuMess()-"+SystemMessageUtil.getCpuMess());
	}
	
	
	/**
	 * @see 得到Cpu使用率的所有信息，存在Map中
	 * @return
	 * @throws SigarException 
	 */
	public static Map<String,String> getCpuMess() throws SigarException{
		Map <String,String>map=new HashMap<String,String>();
		map.put("cpu", getFormatNum(100-sigar.getCpuPerc().getIdle()*100));
		CpuPerc[] cpu =sigar.getCpuPercList();
		for (int i = 0; i < cpu.length; i++) {
			map.put("cpu"+i, getFormatNum(100-cpu[i].getIdle()*100));
		}
		for(int i=cpu.length;i<=16;i++){
			map.put("cpu"+i,"0");
		}
		return map;
	}
	
	/**
	 * @see 得到内存使用率
	 * @return
	 * @throws SigarException 
	 */
	public static String getMem() throws SigarException{
		return getFormatNum(sigar.getMem().getUsedPercent());
	}
	
	
	/**
	 * @see 将得到double型数据变成两位小数形式
	 * @param value
	 * @return
	 */
	public static String getFormatNum(double value){
		DecimalFormat df=new DecimalFormat("#.00"); 
		return df.format(value);
	}
	
	/**
	 * @see 得到Cpu的空闲率
	 * @param allMessage cpu的详细信息
	 * @return 解析为数值型的字符串
	 */
	
	public static String getCpuIdleValue(String allMessage){
		String cpuArr[]=allMessage.split(",| |%");
		return cpuArr[18];
	}
	/**
	 * @see 得到每个Cpu的信息
	 * @return 每个Cpu信息的字符串数组
	 * @throws SigarException
	 */
	public static String[] getPreCpuMess() throws SigarException{
		CpuPerc[] cpu = sigar.getCpuPercList();
		String [] cpuPre = new String[cpu.length];
		for (int i = 0; i < cpu.length; i++) {
			cpuPre[i]=cpu[i].toString();
		}
			return cpuPre;
	}
	
	/**
	 * @see 得到Cpu的整体信息
	 * @return
	 * @throws SigarException
	 */
	public static String getCpu() throws SigarException{
		return sigar.getCpuPerc().toString();
	}
	
	public static Map<String,String> getCpuAll() throws SigarException{
		Map<String,String> cpuMap=new HashMap<String,String>();
		String cpu=getCpu();
		String[] cpuPre=getPreCpuMess();
		String value="";
		for (int i = 0; i < cpuPre.length; i++) {
			//System.out.println(cpuPre[i]);
			value=getCpuIdleValue(cpuPre[i]);
			//System.out.println(value);
			cpuMap.put("cpu"+i, cpuForUse(value));
		}
		cpuMap.put("cpu", cpuForUse(getCpuIdleValue(cpu)));
		return cpuMap;
	}
	
	/**
	 * @see 得到内存使用率
	 * @return
	 * @throws SigarException 
	 */
	public static String getRom() throws SigarException{
		String str=sigar.getMem().toString();
		String romArr[]=str.split(",| |%");
		double avRom=Double.parseDouble(romArr[1].substring(0,romArr[1].length()-1));
		double useRom=Double.parseDouble(romArr[4].substring(0,romArr[4].length()-1));
		double shiyonglv=useRom/avRom;
		return String.valueOf(shiyonglv*100).substring(0,5);
	}
	
	/**
	 * @see 将CPU的空闲率转化为使用率
	 * @param cpu
	 * @return
	 */
	public static String cpuForUse(String cpu){
		double cpuvalue=Double.parseDouble(cpu);
		//System.out.println(String.valueOf(100-cpuvalue));
		String val=String.valueOf(100-cpuvalue);
		if(val.length()>3){
			val=val.substring(0,4);
		}
		return val;
	}

	
}
