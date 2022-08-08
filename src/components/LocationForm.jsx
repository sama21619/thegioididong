import useLocationForm from "./useLocationForm";
import Select from "react-select";

function LocationForm() {
  const {
    state,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
    onSubmit
  } = useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard
  } = state;






  return (
    <form
      onSubmit={onSubmit}
      className="form-container"
    >
      <div className="select-container">
        <Select
          name="cityId"
          key={`cityId_${selectedCity?.value}`}
          isDisabled={cityOptions.length === 0}
          options={cityOptions}
          onChange={(option) => onCitySelect(option)}
          placeholder="Tỉnh/Thành"
          defaultValue={selectedCity}
        />

        <Select
          name="districtId"
          key={`districtId_${selectedDistrict?.value}`}
          isDisabled={districtOptions.length === 0}
          options={districtOptions}
          onChange={(option) => onDistrictSelect(option)}
          placeholder="Quận/Huyện"
          defaultValue={selectedDistrict}
        />

        <Select
          name="wardId"
          key={`wardId_${selectedWard?.value}`}
          isDisabled={wardOptions.length === 0}
          options={wardOptions}
          placeholder="Phường/Xã"
          onChange={(option) => onWardSelect(option)}
          defaultValue={selectedWard}
        />
      </div>

      <button className="btn-Address"type="submit">Xác nhận</button>
    </form>
  );
}

export default LocationForm;
