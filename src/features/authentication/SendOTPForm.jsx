import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ register, isSending, onSubmit }) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <div>
          <TextField
            label="شماره موبایل"
            name="phoneNumber"
            register={register}
          />
        </div>
        <div>
          {isSending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
