package com.fooddonate.main.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "donar")
public class DonarRegisterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int donarRegisterId;
    private String firstname;
    private String lastname;
    private String email;
    private String password;

    // Getters and setters for the fields
    public int getUserRegisterId() {
        return donarRegisterId;
    }

    public void setDonarRegisterId(int donarRegisterId) {
        this.donarRegisterId = donarRegisterId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Constructors
    // ...
}
