package com.cisco.syslog.client;

import java.io.File;
import java.io.FileNotFoundException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;
public class UDPClient {
	private DatagramSocket socket;
	private InetAddress address;

	private byte[] buf;

	public UDPClient() throws Exception{
		socket = new DatagramSocket();
		address = InetAddress.getByName("cmad-syslog-app");
	}

	public void sendData() throws Exception{

		try {
		      File myObj = new File("LogFile.txt");
		      Scanner myReader = new Scanner(myObj);
		      while (myReader.hasNextLine()) {
		        String data = myReader.nextLine();
		       // System.out.println(data);
		        buf = data.getBytes();
				DatagramPacket packet 
				= new DatagramPacket(buf, buf.length, address, 520);
				socket.send(packet);
		      }
		      myReader.close();
		    } catch (FileNotFoundException e) {
		      System.out.println("An error occurred.");
		      e.printStackTrace();
		    }

	}

	public void close() {
		socket.close();
	}
	public static void main(String[] args) throws Exception {        
		UDPClient sender = new UDPClient();
		System.out.println("-- Running UDP Client at " + InetAddress.getLocalHost() + " --");
		sender.sendData();
	}

}