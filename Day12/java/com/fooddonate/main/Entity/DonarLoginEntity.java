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
@Table(name="DonarLogin")
public class DonarLoginEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int DonarLoginId;
	private String Email;
	private String Password;
	public DonarLoginEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getUserLoginId() {
		return DonarLoginId;
	}
	public void setDonarLoginId(int donarLoginId) {
		DonarLoginId = donarLoginId;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}

}
