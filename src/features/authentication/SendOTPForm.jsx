import React, { useState } from "react";
import TextField from "../../hooks/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <div>
          <TextField
            label="شماره موبایل"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn--primary w-full">ارسال کد تایید</button>
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
