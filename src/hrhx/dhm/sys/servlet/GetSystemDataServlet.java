package hrhx.dhm.sys.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import hrhx.dhm.sys.utils.SystemMessageUtil;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class GetSystemDataServlet
 */
public class GetSystemDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	JSONObject resultJSON = new JSONObject();//构建一个JSONObject
    public GetSystemDataServlet() {
        super();
      
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		this.doPost(request,response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			Map<String, String> cpuMap=SystemMessageUtil.getCpuMess();
			String romValue=SystemMessageUtil.getRom();
			cpuMap.put("rom", romValue);
			resultJSON.putAll(cpuMap);
		    response.setContentType("application/x-json");//需要设置ContentType 为"application/x-json"
		    PrintWriter out = response.getWriter();
		    System.out.println("Json 串"+resultJSON.toString());
		    out.println(resultJSON.toString());//向客户端输出JSONObject字符串
		    out.flush();
		    out.close();
		   } catch (Exception e) {
		    e.printStackTrace();
		   } 
		
	}

}
