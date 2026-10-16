package com.roms;

import java.net.HttpURLConnection;
import java.net.URI;

/** Lightweight Docker health probe that avoids requiring a shell or curl in the runtime image. */
public final class ContainerHealthCheck {
    private ContainerHealthCheck() {
    }

    public static void main(String[] args) throws Exception {
        var connection = (HttpURLConnection) URI.create("http://127.0.0.1:8081/api/health").toURL().openConnection();
        connection.setConnectTimeout(3000);
        connection.setReadTimeout(3000);
        connection.setRequestMethod("GET");
        if (connection.getResponseCode() != HttpURLConnection.HTTP_OK) {
            System.exit(1);
        }
    }
}
