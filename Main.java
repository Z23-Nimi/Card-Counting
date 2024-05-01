import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;

public class Main {
    // Variables for each type of card
    private static int ace = 4;
    private static int two = 4;
    private static int three = 4;
    private static int four = 4;
    private static int five = 4;
    private static int six = 4;
    private static int seven = 4;
    private static int eight = 4;
    private static int nine = 4;
    private static int tensJacksQueensKings = 16;
    private static int joker = 4;

    // Method to reset all card values back to their original value (4)
    private static void resetCards() {
        ace = 4;
        two = 4;
        three = 4;
        four = 4;
        five = 4;
        six = 4;
        seven = 4;
        eight = 4;
        nine = 4;
        tensJacksQueensKings = 16;
        joker = 4;
    }
}


public class BackendServer {
    public static void main(String[] args) throws Exception {
        int port = 8000; // You can change the port as needed
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/", new MyHandler());
        server.setExecutor(null); // creates a default executor
        server.start();
        System.out.println("Server started on port " + port);
    }

    static class MyHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String response = "";
            String requestMethod = exchange.getRequestMethod();
            if (requestMethod.equalsIgnoreCase("GET")) {
                String uri = exchange.getRequestURI().toString();
                System.out.println("Received request: " + uri); // Log the received URI
                // You can implement different actions based on the URI here
                if (uri.equals("/ace")) {
                    response = "You pressed the Ace button";
                } else if (uri.equals("/two")) {
                    response = "You pressed the Two button";
                } else if (uri.equals("/three")) {
                    response = "You pressed the Three button";
                } // add similar if-else blocks for other buttons
            }
            exchange.sendResponseHeaders(200, response.length());
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}
