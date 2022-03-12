package com.cjc.app.fl.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cjc.app.fl.main.model.SanctionLetter;
@Repository
public interface LoanRepository extends JpaRepository<SanctionLetter, Integer> {

	SanctionLetter findBySid(int sid);

}
