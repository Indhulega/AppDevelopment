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
@Table(name = "UserLogin")
public class UserLoginEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int UserLoginId;

    private String Username;
    private String Password;

    public int getUserLoginId() {
        return UserLoginId;
    }

    public void setUserLoginId(int UserLoginId) {
        this.UserLoginId = UserLoginId;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String Username) {
        this.Username = Username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String Password) {
        this.Password = Password;
    }
}
